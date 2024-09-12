export const placeCaretAtEnd = (el: any) => {
  el.focus();
  if (
    typeof window.getSelection != "undefined" &&
    typeof document.createRange != "undefined"
  ) {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (
    "createTextRange" in document.body &&
    typeof document.body.createTextRange === "function"
  ) {
    const textRange = document.body.createTextRange?.();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
};
