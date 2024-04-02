const JSONServer = require('json-server')  // JSONServer uses ES-5 unlike 
//'ES-6' in react . Hence we use 'require()' .It is similar to 'import'
const MPServer = JSONServer.create()
const router=JSONServer.router('db.json') //when request comes redirects to 'db.json' file 
const middleware = JSONServer.defaults()  // middleware 
//converts incoming to JSON data 

const PORT = 3000 || process.env.PORT // when you host our site to internet, 
//lets say someone is using our site and 3000 is already used , hence we 
//use 'process.env.PORT' to use some other port at that time

MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=> {
    console.log((`media-player server started at PORT: ${PORT},and waiting for the client request...`));
})
