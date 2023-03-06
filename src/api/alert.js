
import swal from 'sweetalert';

export function alertError(e){
    console.log(e.response.status)
    if(e.response.status === 400){
        swal("Por Favor", "Ingrese Paradero Valido", "error");
    }
}