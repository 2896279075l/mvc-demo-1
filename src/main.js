//app1
const $btn1 = $('#add1');
const $btn2 = $('#minus1');
const $btn3 = $('#mul2');
const $btn4 = $('#divide2');
const $number = $('#number')
const n = localStorage.getItem('n');
$number.text(n || 100);

$btn1.on('click', () => {
    let n = parseInt($number.text());
    n += 1;
    localStorage.setItem('n', n);
    $number.text(n);
})
$btn2.on('click', () => {
    let n = parseInt($number.text());
    n -= 1;
    localStorage.setItem('n', n);
    $number.text(n);
})
$btn3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem('n', n);
    $number.text(n);
})
$btn4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem('n', n);
    $number.text(n);
})

//-------------------------------------------------------------

//app2
const $tabBar = $('#tab-bar');
const $tabContent = $('#tab-content');
$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget);
    $li.addClass('selected')
        .siblings().removeClass('selected');
    const index = $li.index();
    $tabContent.children().eq(index)
        .addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click');

//-----------------------------------------------------------------

//app3

const $square = $('#app3 .square');
$square.on('click', () => {
    $square.toggleClass('active');
})

//-----------------------------------------------------------------
//app4

const $circle = $('#app4 .circle');
$circle.on('mouseenter', () => {
    $circle.addClass('active');
}).on('mouseleave', () => {
    $circle.removeClass('active')
})