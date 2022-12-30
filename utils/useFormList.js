import {useForm} from 'react-hook-form'

const useFormList = () => {
    const {register, handleSubmit, watch, formState: { errors }} = useForm();

    return [register, handleSubmit, errors];
}

export default useFormList;