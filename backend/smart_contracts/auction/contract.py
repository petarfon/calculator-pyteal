import beaker
import pyteal as pt

# state
class AuctionState:

    #global state
    previous_bidder = beaker.GlobalStateValue(
        stack_type = pt.TealType.bytes, default = pt.Bytes("")
    )

    previous_bid = beaker.GlobalStateValue(
        stack_type = pt.TealType.uint64, default = pt.Int(0)
    )


# logic
app = beaker.Application("Auction", state=AuctionState)

@app.create(bare=True)
def create() -> pt.Expr:
    return app.initialize_global_state()

# @app.external
# def opt_into_asset() -> pt.Expr:
#     return pt.Seq(
#         # check the state, because we need to know this method is only called once 
#         pt.Assert(app.state.asa == pt.Int(0)),
#         app.state.asa.set(asset.asset_id())
#     )
