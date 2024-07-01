const midtransClient = require("midtrans-client");
const { Pokemon, User, UserOrder } = require("../models/");

module.exports = class OrderController {
    
  static async inititateMidTrans(req, res, next) {
    try {
      const { pokemonId } = req.params;
      const { id } = req.user;

      console.log(id, `<<< id user`);

      let snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.YOUR_SERVER_KEY,
      });

      let pokemon = await Pokemon.findByPk(pokemonId);
      const amount = pokemon.price;

      const user = await User.findByPk(id);

      let order = await UserOrder.create({
        status: false,
        pokemonId: pokemonId,
        userId: req.user.id,
      });

      let parameter = {
        transaction_details: {
          order_id: order.id,
          gross_amount: amount,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          fullName: user.fullName,
          email: user.email,
          phone: user.phoneNumber,
        },
      };

      const transaction = await snap.createTransaction(parameter);
      let transactionToken = transaction.token;

    //   console.log("transactionToken:", transactionToken);

      res.json({
        message: "Order has been created",
        transactionToken,
      });
    } catch (error) {
      next(error);
    }
  }

  static async donePurchase(req,res, next){
    try {
        const {userOrderId} = req.body

        const order = await UserOrder.findByPk(userOrderId)

        await UserOrder.update({
            status:true,
        },{
            where:{
                id:userOrderId
            }
        })

        res.json({
            message:"Thanks for catching"
        })

    } catch (error) {
        next(error)
    }
  }
};
