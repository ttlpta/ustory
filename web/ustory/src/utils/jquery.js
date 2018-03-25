var $ = window.$;

export const initCarousel = () => {
  $("#owl-demo-1").owlCarousel({
    autoPlay: 3000,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [400,1]
  });

  $("#owl-demo-2").owlCarousel({
    autoPlay: 3000,
    items : 3,
  });
}

export const showModal = (idElement) => {
  $(`#${idElement}`).modal('show');
};

export const hideModal = (idElement) => {
  $(`#${idElement}`).modal('hide');
}

export const alert = (msg, type = 'success') => {
  $.notify(msg, type);
};