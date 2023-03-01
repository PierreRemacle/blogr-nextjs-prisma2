import prisma from '../../lib/prisma';


export default async function handler(req, res) {



  if (req.method === "POST") {
    const formData = req.body;
    console.log(formData);
    try {
      const newComment = await prisma.forms.create({
        data: {
          date: new Date(),
          firstname: formData.firstname,
          lastname: formData.lastname,
          subject: formData.subject,
          year: formData.year,
          phone: formData.phone,
          email: formData.email,
          text: formData.text,
        }
      });
      console.log("Added new comment to database");
      res.status(200).json({ data: newComment });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to add new comment" });
    }

  } else if (req.method === "GET") {
    try {
      const data = await prisma.forms.findMany();
      console.log("Retrieved data from database");
      res.status(200).json({ data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to retrieve data" });
    }

  } else if (req.method === "PUT") {
    const updatedData = req.body;
    console.log(updatedData);
    try {
      const updatedComment = await prisma.forms.update({
        where: {
          id: updatedData.id
        },
        data: {
          firstname: updatedData.firstname,
          lastname: updatedData.lastname,
          subject: updatedData.subject,
          year: updatedData.year,
          phone: updatedData.phone,
          email: updatedData.email,
          text: updatedData.text
        }
      });
      console.log("Edited element in database");
      res.status(200).json({ data: updatedComment });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to edit element" });
    }

  } else if (req.method === "DELETE") {
    const id = req.body.id;
    console.log(req.body.id);
    try {
      const deletedComment = await prisma.forms.delete({
        where: {
          id
        }
      });
      console.log("Deleted element from database");
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Unable to delete element" });
    }
  }
}
