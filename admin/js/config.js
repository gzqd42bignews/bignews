(function() {
  $(function() {
    jeDate("#testico", {
      trigger: "click",
      theme: { bgcolor: "#00A680", pnColor: "#00DDAA" }, //绿色主题
      format: "YYYY-MM-DD",
      isinitVal: true
    });
  });
  tinymce.init({
    selector: "#mytextarea",
    height: "350px",
    language: "zh_CN",
    directionality: "ltl",
    browser_spellcheck: true,
    contextmenu: false,
    plugins: [
      "advlist autolink lists link image charmap print preview anchor",
      "searchreplace visualblocks code fullscreen",
      "insertdatetime media table contextmenu paste imagetools wordcount",
      "code"
    ],
    toolbar:
      "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code"
  });
})();
