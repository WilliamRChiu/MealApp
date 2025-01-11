// FetchGetTest.js

import React, { useState } from 'react';

const FetchGetTest = () => {
    const [output, setOutput] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFetch = async () => {
        setLoading(true);
        setOutput('');
        setError(null);

        try {
            const response = await fetch('http://localhost:4000/api/Meal/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                // Attempt to parse the error message from the response
                const errorData = await response.json();
                throw errorData;
            }

            const data = await response.json();
            setOutput(`Success:\n${JSON.stringify(data, null, 2)}`);
            console.log('Success:', data);
        } catch (err) {
            setError(`Error:\n${JSON.stringify(err, null, 2)}`);
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h2>GET Fetch Test to Backend on Port 6000</h2>
            <button onClick={handleFetch} style={styles.button} disabled={loading}>
                {loading ? 'Sending...' : 'Send GET Request'}
            </button>
            {output && (
                <pre style={styles.output}>
                    {output}
                </pre>
            )}
            {error && (
                <pre style={{ ...styles.output, ...styles.error }}>
                    {error}
                </pre>
            )}
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '20px'
    },
    output: {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        border: '1px solid #ccc',
        maxHeight: '400px',
        overflowY: 'auto'
    },
    error: {
        color: 'red'
    }
};

export default FetchGetTest;
