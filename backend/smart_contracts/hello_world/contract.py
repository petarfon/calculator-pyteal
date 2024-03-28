import beaker
import pyteal as pt


app = beaker.Application("hello_world")


@app.external
def hello(name: pt.abi.String, *, output: pt.abi.String) -> pt.Expr:
    return output.set(pt.Concat(pt.Bytes("Hello, "), name.get()))

@app.external
def add(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Second: Returns the sum of two numbers"""
    return output.set(pt.Add(a.get(), b.get()))

@app.external
def subtract(a: pt.abi.Uint64, b: pt.abi.Uint64, *, output: pt.abi.Uint64) -> pt.Expr:
    """Second: Returns the difference between two numbers"""
    return output.set(a.get() - b.get())
