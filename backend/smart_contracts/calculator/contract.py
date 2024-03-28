import pyteal as pt
#import beaker
from beaker import (
    Application,
    Authorize,
    GlobalStateValue,
)


class CalculatorState:
    total = GlobalStateValue(
        stack_type=pt.TealType.uint64,
        descr="A calculator that stores application state",
        # default=pt.Int(0)
    )


app = Application("CalculatorApp", state=CalculatorState())


@app.external(authorize=Authorize.only_creator())
def add(number: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """add value to the total"""
    return pt.Seq(
        app.state.total.set(app.state.total + number.get()),
        output.set(app.state.total),
    )

@app.external(authorize=Authorize.only_creator())
def subtract(number: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """subtract value from the total"""
    return pt.Seq(
        app.state.total.set(app.state.total - number.get()),
        output.set(app.state.total),
    )

@app.external
def multiply(number: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Multiply total with a number, return the result"""
    return pt.Seq(
        app.state.total.set(app.state.total * number.get()),
        output.set(app.state.total)
    )

@app.external
def divide(number: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Divide total with a number, return the result"""
    return pt.Seq(
        app.state.total.set(app.state.total / number.get()),
        output.set(app.state.total)
    )


# @app.external(authorize=Authorize.only_creator())
# def decrement(*, output: pt.abi.Uint64) -> pt.Expr:
#     """decrement the counter"""
#     return pt.Seq(
#         app.state.counter.set(app.state.counter - pt.Int(1)),
#         output.set(app.state.counter),
#     )
