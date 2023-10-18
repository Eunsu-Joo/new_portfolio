@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');
.modal{
    font-family: 'Nanum Gothic', sans-serif;
    width: 100%;
    height: 100vh;
    background: rgba(131, 130, 130, 0.9);
    position: fixed;
    top:0;
    left: 0;
    z-index: 10000;
    color: #000 !important;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-contents{
    width: 500px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 25px 40px -20px #3c4a56;
    position: relative;
    padding: 50px 45px;
}
.modal-title{
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: -1px;
    margin-bottom: 50px;
}
.modal-contents p:nth-child(2){
    line-height: 150%;
}
.modal-title span{
    display: block;
    margin-top: 15px;
    color: #225ea7;
    font-size: 2rem;
}
.modal .close-btn{
    font-family: 'Poppins',sans-serif;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #225ea7;
    transition: all 0.5s;
    padding: 12px 35px;
    box-shadow: 0 10px 25px #3c4a5645;
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    color: #225ea7;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s;
}
.modal .close-btn::after{
    content: '';
    width: 100%;
    height: 100%;
    background-color: #225ea7;
    position: absolute;
    left: 0;
    top: -100%;
    z-index: -1;
    transition: all 0.3s;
}
.modal .close-btn:hover{
    color: #fff;
}
.modal .close-btn:hover:after{
    top: 0;
}

