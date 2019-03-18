$(function() {
  var $width = $('#width'),
      $height = $('#length'),
      $btnCal = $('#btn'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

  $btnCal.click(function(){
      var w = $width.val(),
          h = $height.val();
console.log(w,h)
      var r = new Rectangle(w, h);

      $perimeter.val(r.perimeter());
      $area.val(r.area());              
  });
});
