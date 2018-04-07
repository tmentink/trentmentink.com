
var Form = ((Form) => {
  "use strict"


  // ----------------------------------------------------------------------
  // Constants
  // ----------------------------------------------------------------------

  const ClassName = {
    FOCUSED   : "field--focused",
    HAS_VALUE : "field--has-value",
    INVALID   : "field--invalid"
  }

  const Data = {
    REQUIRED : "data-required"
  }

  const Selector = {
    BTN_SUBMIT  : "#btnSubmit",
    FORM        : "#form",
    FIELD_INPUT : ".field__input",
    TXT_EMAIL   : "#txtEmail",
    TXT_NAME    : "#txtName",
    TXT_PHONE   : "#txtPhone",
    TXT_MESSAGE : "#txtMessage",
    TXT_WEBSITE : "#txtWebsite"
  }


  // ----------------------------------------------------------------------
  // Public Methods
  // ----------------------------------------------------------------------

  Form.validate = function() {
    let isValid = true

    $cache(Selector.FORM).find(Selector.FIELD_INPUT).each(function() {
      if (Form.validateField($(this)) === false) isValid = false
    })

    return isValid
  }

  Form.validateField = function($input) {
    const isRequired = $input.attr(Data.REQUIRED) !== undefined
    const isEmpty    = $input.val() === ""
    const isValid    = !isRequired || (isRequired && !isEmpty)

    $input.parent().toggleClass(ClassName.INVALID, !isValid)
    return isValid
  }


  // ----------------------------------------------------------------------
  // Init
  // ----------------------------------------------------------------------

  Form.init = function() {
    $cache(Selector.FORM).on("blur", Selector.FIELD_INPUT, function() {
      const $input = $(this)
      const empty  = $input.val() === ""

      Form.validateField($input)
      $input.parent().removeClass(ClassName.FOCUSED)
      $input.parent().toggleClass(ClassName.HAS_VALUE, !empty)
    })

    $cache(Selector.FORM).on("focus", Selector.FIELD_INPUT, function() {
      $(this).parent().addClass(ClassName.FOCUSED)
    })

    $cache(Selector.BTN_SUBMIT).on("click", function() {
      if (Form.validate()) $cache(Selector.FORM).submit()
    })
  }


  return Form
})(Form || (Form = {}))
