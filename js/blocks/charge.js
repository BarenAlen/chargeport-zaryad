const chargeAnimation = () => {
    const indicator = document.querySelector('.svg-indicator-indication')
    
    const init = () => {
        let arcLength = 439.6;
        let arcOffset = arcLength * ((100 - 0) / 100)
        
        for(let i = 0; i != 100; i++) {
            arcOffset = arcLength * ((100 - i)/100)

            setTimeout(() => {
                indicator.style.strokeDashoffset = arcOffset + 'px'
            }, 50)
        }
    }

    init()
}

export default chargeAnimation