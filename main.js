let n
init()
setTime()
$('.window').on('mouseenter', () => {
    window.clearInterval(timerId)
    $('#button-left').addClass('buttonL')
    $('#button-right').addClass('buttonR')
})
$('.window').on('mouseleave', () => {
    setTime()
    $('#button-left').removeClass('buttonL')
    $('#button-right').removeClass('buttonR')
})
$('#button-left').on('click', () => {
    PlayToLeft();
})
$('#button-right').on('click', () => {
    PlayToRight();
})



function CurrentIndex() {
    if (n > 5) {
        n = n % 5
    }
    if (n === 0) {
        n = 5
    }
    return n;
}

function init() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
}

function makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    $node.removeClass('current').addClass('leave')
    return $node
}

function makeEnter($node) {
    $node.removeClass('leave').addClass('enter')
}

function getImage() {
    return $(`.images > img:nth-child(${CurrentIndex()})`)
}

function setTime() {
    timerId = setInterval(() => {
        PlayToRight()
    }, 3000)
}

function PlayToRight() {
    makeLeave(getImage(n))
    .one('transitionend', (e) => {
        makeEnter($(e.currentTarget))
    })
    n += 1
    makeCurrent(getImage())
}

function PlayToLeft() {
    makeLeave(getImage(n))
    .one('transitionend', (e) => {
        makeEnter($(e.currentTarget))
    })
    n -= 1
    makeCurrent(getImage())
}