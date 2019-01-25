// 这个文件，是用来做用户验证的一个中间件函数

module.exports = function(req,res,next){
    // 得到 nickName 
    let nickName = req.cookies.nickName;
    if(nickName){
        // 存在，想去哪就去哪
        next(); 
    }else{
        // 不存在，那么就要去登录页面
        res.redirect('login.html')
    }
}