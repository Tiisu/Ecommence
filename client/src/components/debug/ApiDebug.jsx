import { API_BASE_URL } from "@/config";

function ApiDebug() {
  const testImageFetch = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/shop/products/get`);
      console.log('API Response Status:', response.status);
      const data = await response.json();
      console.log('Sample Product Data:', data?.data?.[0]);
      
      // Check image URLs specifically
      if (data?.data?.[0]) {
        console.log('Product Image URL:', data.data[0].image);
        console.log('All Products with Images:', data.data.map(p => ({
          title: p.title,
          image: p.image
        })));
      }
    } catch (error) {
      console.error('API Fetch Error:', error);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'red', 
      color: 'white', 
      padding: '10px', 
      zIndex: 9999,
      fontSize: '12px',
      borderRadius: '4px',
      maxWidth: '300px'
    }}>
      <div><strong>API URL:</strong> {API_BASE_URL}</div>
      <div><strong>ENV:</strong> {import.meta.env.VITE_API_URL || 'NOT SET'}</div>
      <button 
        onClick={testImageFetch}
        style={{ 
          background: 'white', 
          color: 'red', 
          border: 'none', 
          padding: '4px 8px', 
          marginTop: '5px',
          cursor: 'pointer',
          fontSize: '10px'
        }}
      >
        Test API
      </button>
    </div>
  );
}

export default ApiDebug;