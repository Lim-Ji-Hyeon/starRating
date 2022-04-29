const StarRating = $container => {

    const container = document.createElement('div')
    container.classList.add('star-rating-container')
    $container.appendChild(container)

    let realScore;

    const calculate = (e, maxScore) => {
        const {width, left} = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - left
        const scale = width / maxScore
        const score = Math.floor(x / scale + 1)
        return score
      }

    let rate = Number.parseInt($container.getAttribute('data-max-rating'))
    let inner = ''

    for (let i = 0; i < rate; i++) {
        inner += `<i class='bx bxs-star'></i>`
    }
    container.innerHTML = inner

    const setMouseOver = (score) => {
        const starList = [...container.children]
        starList.forEach( (star ,i) => {
            if (score > i ) {
                star.classList.add('hovered')
            } else {
                star.classList.remove('hovered')
            }
        })
    }
    const clickMouse = (score) => {
        const starList = [...container.children]
        starList.forEach( (star, i) => {
            if (score > i) {
                star.classList.add('selected')
            }
        })
    }
    
    container.addEventListener('mouseover', (e) => {
        const score = calculate(e, rate)
        setMouseOver(score)
    })

    container.addEventListener('mouseleave', () => {
        const score = 0
        setMouseOver(score)
    })

    container.addEventListener('click', (e) => {
        realScore = calculate(e, rate)
        clickMouse(realScore)

        const signal = new CustomEvent('rating-change', {
            detail : realScore,
            bubbles : true,
        })
        
        container.dispatchEvent(signal)
    })

}

export default StarRating;
