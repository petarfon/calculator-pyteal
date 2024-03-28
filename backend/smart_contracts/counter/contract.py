import pyteal as pt

from beaker import (
    Application,
    Authorize,
    GlobalStateValue,
)


class CounterState:
    counter = GlobalStateValue(
        stack_type=pt.TealType.uint64,
        descr="A counter for showing how to use application state",
    )


app = Application("CounterApp", state=CounterState())


@app.external(authorize=Authorize.only_creator())
def increment(*, output: pt.abi.Uint64) -> pt.Expr:
    """increment the counter"""
    return pt.Seq(
        app.state.counter.set(app.state.counter + pt.Int(1)),
        output.set(app.state.counter),
    )


@app.external(authorize=Authorize.only_creator())
def decrement(*, output: pt.abi.Uint64) -> pt.Expr:
    """decrement the counter"""
    return pt.Seq(
        app.state.counter.set(app.state.counter - pt.Int(1)),
        output.set(app.state.counter),
    )
