function log (req, res, next) {
    console.log('이동');
    //사용자 정보를 확인하는 동작도 route 중간에 사용 가능
    // req.body()
    next();
};

module.exports = log;