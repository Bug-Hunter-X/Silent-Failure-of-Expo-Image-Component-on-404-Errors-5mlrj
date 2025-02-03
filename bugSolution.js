The solution utilizes the `onError` prop of the Expo Image component.  This prop accepts a callback function that executes when an error occurs during image loading.  We can use this callback to handle 404 errors gracefully, for example, by displaying a placeholder image.

```javascript
import * as React from 'react';
import { Image } from 'expo-image';

export default function App() {
  const [error, setError] = React.useState(false);

  const handleError = (error) => {
    setError(true);
  };

  return (
    <Image
      source={{ uri: 'https://example.com/nonexistent.jpg' }}
      style={{ width: 200, height: 200 }}
      onError={handleError}
    />
  );
}
```
Then, conditionally render a different image (placeholder) if the error state is true.