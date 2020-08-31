import {useState, useEffect} from 'react';

export default function useFetch(url, opts) {
    const [response, setResponse] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        
        fetch(url, opts)
            .then(res => res.json())
            .then(res => {
                setResponse(res)
                setLoading(false)
            })
            .catch(err => {
                setHasError(true)
                setLoading(false)
            })
    }, [url, opts])

    return [response, loading, hasError]
}