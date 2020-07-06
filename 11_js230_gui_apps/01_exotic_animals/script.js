$(function() {
  $('#exotic_animals').on('mouseenter', 'figure', function() {
    var $self = $(this);
    var $caption = $self.find('figCaption');
    
    var showCaption = setTimeout(function() {
      $caption.fadeIn().off();
    }, 2000);

    $self.on('mouseleave', function() {
      clearTimeout(showCaption);
      $caption.fadeOut().off();
    })
  });
})