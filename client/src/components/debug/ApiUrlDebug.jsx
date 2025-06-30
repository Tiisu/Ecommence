import { API_BASE_URL } from "@/config";

function ApiUrlDebug() {
  // This component helps debug the API URL configuration
  console.log("🔧 API Configuration Debug:");
  console.log("VITE_API_URL from env:", import.meta.env.VITE_API_URL);
  console.log("API_BASE_URL being used:", API_BASE_URL);
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#f0f0f0', 
      padding: '10px', 
      border: '1px solid #ccc',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <strong>API Debug Info:</strong><br/>
      <strong>Environment:</strong> {import.meta.env.MODE}<br/>
      <strong>VITE_API_URL:</strong> {import.meta.env.VITE_API_URL || 'Not set'}<br/>
      <strong>API_BASE_URL:</strong> {API_BASE_URL}<br/>
      <small>Check console for more details</small>
    </div>
  );
}

export default ApiUrlDebug;