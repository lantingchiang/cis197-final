var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var FoodPost = require('../../../db/models/foodPost');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}))

// route to add new foodPost to the database
router.post('/post-new-food', (req, res, next) => {
  //how to access data posted by user?
  var foodname = req.body.foodname;
  var location = req.body.location; 
  var author = req.session.user;
  var image = req.body.image;
  var description = req.body.description;
  var newFoodPost = new FoodPost({ foodname: foodname, location: location, postedby: author, available: 'yes', image: image, description: description }); 
    
  newFoodPost.save(function(err) {
    if (err) {
      next(err);
    } else {
      res.json({newFoodPost});
    }
  })  
});



// route to mark a food as gone
router.post('/mark-food-as-gone', (req, res, next) => {
  FoodPost.findById(req.body.foodId, function (err, food) {
    if (!err) {
      food.available = 'too late, gone~';
      food.save(function (saveErr) {
        if (saveErr) {
          next(saveErr);
        } else {
          //pull out all food posts (with updated fields) and send over
          FoodPost.find({}, function(err, result) {
            if (err) {
              next(err);
            } else {
              res.json({result});
            }
          })
        }
      })
    } else {
      next(err);
    }
  })
});

//route to render all food posts in home page
//homepage 
router.get('/foods', (req, res, next) => {
  // display foodposts from db (find is mongoose method)
  FoodPost.find({}, function(err, result) {
    if (err) {
      next(err)
    }
    //send the foodPosts and user pulled from db 
    res.json({result});
  })
});

module.exports = router;
