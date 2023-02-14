$.fn.myfunc = function() {
  $('#render #startDate').attr('readonly', false);
  $('#render #endDate').attr('readonly', false);

  $('#render #startDate').prop('disabled', false);
  $('#render #endDate').prop('disabled', false);
};
