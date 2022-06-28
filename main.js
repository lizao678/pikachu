!function () {
    let duration = 20
    const btns = document.querySelector('.actions').getElementsByTagName('button')
    for (let item of btns) {
        addClickEvent(item, () => {
            for (let elem of btns) {
                elem.classList.remove('active')
            }
            item.className = 'active'
            switch (item.getAttribute('data-speed')) {
                case 'slow':
                    duration = 100
                    break;
                case 'normal':
                    duration = 20
                    break;
                case 'fast':
                    duration = 10
                    break;
                default:
                    break
            }
        })
    }

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        const timer = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn?.call()
            }
        }, duration)
    }
    let code = `
    /* 
    *  首先，倒上大桶黄色颜料
    */
    .preview {
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFE600;
    }
    .wrapper {
        position: relative;
        width: 100%;
        height: 165px;
    }
    /* 
    *  接着，点上皮卡丘的鼻子
    */
    .nose {
        overflow: hidden;
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-top: 13px solid black;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    /* 
    *  然后是眼睛
    */
    .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2eee;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    /* 
    * 把眼睛放对位置
    */
    @media only screen and (max-width: 500px) {
        .eye {
            position: absolute;
        }
        .eye.left {
            left: 23%;
        }
    
        .eye.right {
            right: 23%;
        }
    }
    
    @media only screen and (min-width: 500px) {
        .eyes {
            margin: 0 auto;
            width: 420px;
            display: flex;
            justify-content: space-around;
        }
    }
    /* 
    * 画龙点睛
    */
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        border-radius: 50%;
        position: relative;
        left: 6px;
        border: 2px solid #000;
    }
    /* 
    * 涂上大大的腮红
    */
    .face {
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    
    .face.left {
        right: 50%;
        margin-right: 116px;
    }
    
    .face.right {
        left: 50%;
        margin-left: 116px;
    }
    /* 
    * 上嘴唇
    */
    .upperLip {
        height: 25px;
        width: 74px;
        border: 3px solid black;
        position: absolute;
        border-top: none;
        background-color: #FEE433;
    }
    
    .upperLip.left {
        right: 50%;
        top: 52px;
        border-bottom-left-radius: 40px 30px;
        transform: rotate(-20deg);
        border-right: none;
    }
    
    .upperLip.right {
        left: 50%;
        top: 52px;
        /* border-radius: 0 15px/10px; */
        border-bottom-right-radius: 40px 30px;
        transform: rotate(20deg);
        border-left: none;
    }
    
    .lowerLip-wrapper {
        position: absolute;
        bottom: -20%;
        left: 50%;
        transform: translateX(-50%);
        height: 134px;
        width: 300px;
        overflow: hidden;
    }
    /* 
    * 下嘴唇
    */
    .lowerLip {
        width: 300px;
        height: 3500px;
        background-color: #990513;
        border-radius: 200px/2000px;
        border: 3px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    /* 
    * 最后是粉粉的舌头
    */
    .lowerLip::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 100px;
        background: #FC4A62;
        border-radius: 539px/334px;
    
    }`
    writeCode('', code)
}.call()


function addClickEvent(ele, fn) {
    ele.addEventListener('click', fn)
}

