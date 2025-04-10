import { imagekit } from "../components/imagekit.js";

const html = ` <body>
     <h1 style="background: orange">
       Thanks for signin to blugs, we will sent a message when new update are
       ready
     </h1>
     <img
       src="https://ik.imagekit.io/ugyn4if2f/blugs/logo.png?updatedAt=1743375385684"
       alt=""
     />
     <p style="color: orangered; font-size: 3rem">From blug</p>
   </body>
 `;

export async function test(req, res) {
  // const sent = await sendEmail("easy21ajibola@gmail.com", html);
  // res.send(sent);
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const result = await imagekit.upload({
      file: req.file.buffer, // File buffer
      fileName: req.file.originalname, // Original file name
      folder: "/blugs",
      useUniqueFileName: false,
    });

    console.log(result.name);
    res.json({ success: true, imageUrl: result.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
