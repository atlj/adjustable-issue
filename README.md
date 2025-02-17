# Expo Adjustable Issue

This repo contains a minimum reproducible example for a problem with adjustable elements.

## How to reproduce?

1. Open the app either with Expo Go or prebuild
2. Toggle VoiceOver on
3. Focus VoiceOver on the red rectangle with "apple" text.
4. VoiceOver should report the element is adjustable. Swipe up and down to try to adjust the element
5. Accessibility actions 'increment', and 'decrement' aren't triggered
