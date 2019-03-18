function copy_to_clipboard(text) {
    Copied = text.createTextRange();
    Copied.execCommand("Copy");
}