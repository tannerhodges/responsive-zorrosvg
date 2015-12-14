# Responsive ZorroSVG

## Issues

- Image gets encoded at first byte, so page doesn't render the final image unless a layout is triggered.
- Triggering a layout with JS either downloads a new image (and still renders too soon) or doesn't update at all.

## Notes

- Initially discovered `foreignObject` via https://gist.github.com/basecode/3241579
- Turns out we don't need the extra `feMerge`. It's just a timing issue with the render cycle.
- Based on the DevTools Timeline, the image is decoded and rendered once the first byte is returned. Nothing tells Chrome to repaint after the image is fully downloaded, so you get the pixelated first byte version. The full quality image is repainted once you resize the page.
- The first byte image is most noticeable when referencing an external image. If you load a local image immediately, the problem is resolved.
- I really wish DevTools could record Network and Timeline data simultaneously.
- For whatever reason, it looks Chrome is downloading `image` despite the `switch` statement. And Firefox loads the default `src` no matter what. So does Safari. And IE doesn't support `picture` or `srcset` at all, so we need a fallback for that. Woof.

## References

- http://codepen.io/Tigt/post/when-responsive-images-get-ugly
- http://scottjehl.github.io/picturefill/#img-sizes
- https://github.com/scottjehl/picturefill#the-gotchas
