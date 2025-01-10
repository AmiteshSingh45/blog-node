const express=require('express');
const router=express.Router();
const post=require('../model/post');   //insert and retrive data

//routes


//home page routes
router.get('', async (req, res) => {
    // Create the locals object
    const locals = {
        title: "Node.js Blog",
        description: "A simple blog created using Node.js, MongoDB, and Express",
    };

    try {
        // Fetch posts from the database
        const data = await post.find();

        // Render the index page with locals and data
        res.render('index', { locals, data });
    } catch (error) {
        console.error("Error fetching posts:", error);

        // Handle error (optional: show error message on the page)
        res.status(500).render('index', { locals, data: [] });
    }
});









router.get('/Log in',(req,res)=>{
    // res.send("Hello World");
    res.render('Login');
});

router.get('/contact us',(req,res)=>{
    // res.send("Hello World");
    res.render('contact');
});

router.get('/about',(req,res)=>{
    // res.send("Hello World");
    res.render('About');
});
 

module.exports=router;




// function insertPostData () {
//     post.insertMany([
//       {
//         title: "Building APIs with Node.js",
//         body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
//       },
//       {
//         title: "Deployment of Node.js applications",
//         body: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments..."
//       },
//       {
//         title: "Authentication and Authorization in Node.js",
//         body: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries."
//       },
//       {
//         title: "Understand how to work with MongoDB and Mongoose",
//         body: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications."
//       },
//       {
//         title: "build real-time, event-driven applications in Node.js",
//         body: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js."
//       },
//       {
//         title: "Discover how to use Express.js",
//         body: "Discover how to use Express.js, a popular Node.js web framework, to build web applications."
//       },
//       {
//         title: "Asynchronous Programming with Node.js",
//         body: "Asynchronous Programming with Node.js: Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations."
//       },
//       {
//         title: "Learn the basics of Node.js and its architecture",
//         body: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers."
//       },
//       {
//         title: "NodeJs Limiting Network Traffic",
//         body: "Learn how to limit netowrk traffic."
//       },
//       {
//         title: "Learn Morgan - HTTP Request logger for NodeJs",
//         body: "Learn Morgan."
//       },
//     ])
//   }
  
//   insertPostData();