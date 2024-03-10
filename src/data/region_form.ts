import { reactive } from 'vue'
export interface productItemFormModel {
  itemName: string
}
export const productItemForm = reactive<productItemFormModel>({
  itemName: ''
})
export interface productRobotFormModel {
  robotName: string
}
export const productRobotForm = reactive<productRobotFormModel>({
  robotName: ''
})
export interface officeFormModel {
  name: string
}
export const officeForm = reactive<officeFormModel>({
  name: ''
})

export interface productFarmhouseFormModel {
  name: string
  agent: string
  tel: string
  car: string
  items: string[]
}
export const productFarmhouseForm = reactive<productFarmhouseFormModel>({
  name: '',
  agent: '',
  tel: '',
  car: '',
  items: []
})
export interface productStandardFormModel {
  name: string
  kg: string
}
export const productStandardForm = reactive<productStandardFormModel>({
  name: '',
  kg: ''
})

export interface productResidualFormModel {
  note: string
  kg: number
}
export const productResidualForm = reactive<productResidualFormModel>({
  note: '',
  kg: 0.3
})
export interface deliveryFormModel {
  delivery: string
  name: string
  tel: string
  car: string
}
export const deliveryForm = reactive<deliveryFormModel>({
  delivery: '',
  name: '',
  tel: '',
  car: ''
})
export interface userFormModel {
  id?: string
  password: string
  passwordAgain: string
  name: string
  tel: string
  office: string
  power: string
  note: string
}
export const userForm = reactive<userFormModel>({
  password: '',
  passwordAgain: '',
  name: '',
  tel: '',
  office: '',
  power: '',
  note: ''
})
