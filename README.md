# Silent Failure of Expo Image Component on 404 Errors

This repository demonstrates a bug in the Expo `Image` component where it silently fails to load images when the source URL returns a 404 error.  Standard error handling within Expo doesn't reliably catch this, making debugging challenging. The solution shows how to robustly handle this case.

## Bug Description
When loading a remote image with a URL that returns a 404 (Not Found), the `Image` component may render nothing, providing no visual indication of the error. This behavior differs from other components that usually provide more explicit error handling.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe the image component rendering (or lack thereof). 

## Solution
The solution involves implementing custom error handling using the `onError` prop of the `Image` component.  This allows for displaying a placeholder image or other feedback when an image fails to load due to a 404 error. 
