let pagers = document.querySelectorAll('.testimonials .pager a');
let testimonialsLists = document.querySelectorAll('.testimonials_list li');
let paginationUp = document.querySelector('.pagination .up');
let paginationDown = document.querySelector('.pagination .down');
let currentIdx = 0;
let testimonialCount = testimonialsLists.length;

/*
pagers를 클릭하면 할일
모든a에서 active를 제거하고, 클릭한 그 요소에 active추가
*/
pagers.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    showTestimonial(idx);
  })
});

function showTestimonial(num) {
  /*
  if(num === -1){
    num == testimonialCount -1;
  }else if(num === 3){
    num = 0
}else{
num = num;
}
  }

  //질문?참이면할일:거짓이면 할일
  num = (num === -1) ? testimonialCount -1: (num === 3) ? 0: num;
*/
  num = (num + testimonialCount) % testimonialCount;
/*
  num = (1+3) % 3  = 1 
  num = (2+3) % 3  = 2 
  num = (3+3) % 3  = 0
  
  */

  for (let testimonial of testimonialsLists) {
    testimonial.classList.remove('active');
  }
  testimonialsLists[num].classList.add('active');
  currentIdx = num;
  for (let pager of pagers) {
    pager.classList.remove('active');
  }
  //모든 testimonials_list에서 active를 제거하고 클릭한 그 요소의 인덱스번호에
  //해당하는 list에 active 추가
  pagers[num].classList.add('active');

}
/*
첫후기인데 -1 -> 마지막 후기가 보이게하기
마지막후기인데 다음-> 첫후기
*/


paginationUp.addEventListener('click',() => {
  showTestimonial(currentIdx + 1)
  });

paginationDown.addEventListener('click',() => {
  showTestimonial(currentIdx - 1)
  });
