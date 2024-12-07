import React, {useEffect , useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
    const location = useLocation();
    const { selectedItems } = location.state || { selectedItems: [] }
    const [products, setProducts] = useState([]);

    const fetchSelectedItems = async () => {
        try {
          const response = await axios.post('/api/selected-items', {
            selectedItems, 
          });
          setProducts(response.data);
        } catch (error) {
          alert('No Items Selected');
        }
      };
    
      useEffect(() => {
        fetchSelectedItems();
      }, []);

    return (
        <div>

        </div>
    )
}

export default Checkout;
