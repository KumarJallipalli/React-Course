/**

What is Tailwind..?

- It is a utility-first CSS framework which
    - i.e., we can use utility classes to build custom designs without writing CSS as in the traditional approach.
- Tailwind automatically removes all unused CSS when building for production
- Tailwind lets you build responsive designs right in your HTML instead.


<aside>
        Go to official documentation to Install Tailwind css
</aside>


What are props..?

- Props are the information that you pass to a JSX tag
- React components use `*props*` to communicate with each other.
    - Every parent component can pass some information to its child components by giving them props.
- Props are arguments passed into React components.
    - Props are passed to components via HTML attributes.
    - The component receives the argument as a `props` object
- Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

*/

// From Profile Component
export default function Profile() {
  return (
    <Avatar
      // Objects inside the JSX are written like this
      // to insert variables inside JSX -> {} && to insert Object -> {} => Together { {} }
      person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
      size={100}
    />
  );
}

// from Avatar Component
function Avatar({ person, size }) {
  // Here, we destructed the obj directly in the parameters of a function
  // person and size are available here
}
