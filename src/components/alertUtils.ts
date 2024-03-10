import { ElMessageBox } from 'element-plus'

export const showAlert = ({
  title,
  class_name,
  btncancel = true,
  text,
  button = true,
  thenCallback = () => {},
  catchCallback = () => {}
}: any) => {
  ElMessageBox({
    title: title,
    message: text,
    dangerouslyUseHTMLString: true,
    showCancelButton: btncancel,
    showConfirmButton: button,
    closeOnClickModal: button ? false : true,
    confirmButtonText: '확인',
    cancelButtonText: '취소',
    customClass: class_name
  })
    .then(thenCallback)
    .catch(catchCallback)
}
