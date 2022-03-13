import * as yup from 'yup'
export const schemaSignUp = yup.object().shape({
    login:yup.string().required('Required field').min(4).max(12),
    confirm:yup.string().oneOf([yup.ref('password')],'Password mismatch').required('Required field'),
    password:yup.string().required('Required field').min(4).max(16),
    telegramId: yup.string().required('Required field')
})
//password: string,
//     confirm: string,
//     login: string,
//     telegramId: string