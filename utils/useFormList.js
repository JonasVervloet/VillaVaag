import {useForm} from 'react-hook-form'

const useFormList = () => {
    const {register, handleSubmit, errors} = useForm();

    return [register, handleSubmit, errors];
}

export default useFormList;