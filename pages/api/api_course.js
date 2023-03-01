import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;

    const newCourse = await prisma.courses.create({
      data: {
        date: new Date(formData.newdate).toISOString(),
        firstname: formData.firstname,
        lastname: formData.lastname,
        subject: formData.newsubject,
        year: formData.year,
        paid: false,
      },
    });

    console.log("Added new course to database");
    res.status(200).json({ data: newCourse });
  } else if (req.method === "GET") {
    const data = await prisma.courses.findMany();

    console.log("Retrieved courses from database");
    res.status(200).json({ data });
  } else if (req.method === "PUT") {
    const updatedData = req.body;
    console.log(updatedData);

    const updatedCourse = await prisma.courses.update({
      where: { id: updatedData.id },
      data: {
        date: updatedData.date,
        firstname: updatedData.firstname,
        lastname: updatedData.lastname,
        subject: updatedData.subject,
        year: updatedData.year,
        paid: updatedData.paid,
      },
    });

    console.log("Edited course in database");
    res.status(200).json({ data: updatedCourse });
  } else if (req.method === "DELETE") {
    const id = req.body.id;
    console.log(req.body.id);

    await prisma.courses.delete({
      where: { id },
    });

    console.log("Deleted course from database");
    res.status(200).json({ message: "Deleted successfully" });
  }
}
