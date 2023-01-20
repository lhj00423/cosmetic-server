//node는 Commom JS를 사용함
// 불러올때 require를 사용
const http = require('http');
// 본인 컴퓨터 주소를 의미함
const hostname = "127.0.0.1";
const port = 8080;
// createServer()--> 서버생성
// 요청정보 req, 응답정보 res
const server = http.createServer(function(req,res){
    const path = req.url;
    const method = req.method;
    if(path ==="/products"){
        //응답을 보낼때 json객체를 보낼거야
        res.writeHead(200,{'Content-type': 'application/json'})
        //객체를 json으로 변환 json.stringify(obj)
        //자바 객체 
        const product = JSON.stringify({
            name : "기초화장품",
            price: 50000
        })
        //응답하면서 보내줌
        res.end(product);
    }else{
        res.end("리액트를 다루는 기술이 뭡니까");
    }
})

//listen은 대기 호스트네임과 포트번호 요청을 기다림 
server.listen(port,hostname);
console.log("화장품 서버가 동작중입니다.");