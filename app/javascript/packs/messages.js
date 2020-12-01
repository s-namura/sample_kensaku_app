$(function () {
  $('.js-text_field').on('keyup', function () { 
    //  キーボードを入力したタイミングで以下の処理を実行する
    var textField = $('.js-text_field');
    var title = $.trim(textField.val());

    console.log(title); // 検索窓の値が取れているか確認
  });
});
