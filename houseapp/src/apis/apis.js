import axios from 'axios'
import qs from 'qs'

const IP = 'http://172.16.12.205:3000/'

export function login(acc, pwd) {
    return axios.post(IP + 'login.php', qs.stringify({ acc, pwd }))

}
export function gethouselist(){
    return axios.get(IP+'gethouselist.php')
}