import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body[0];
    

    const student = await prisma.students.create({
      data: {
        date: new Date(),
        firstname: formData.firstname,
        lastname: formData.lastname,
        year: formData.year,
        phone: formData.phone,
        email: formData.email,
        text: formData.text,
      },
    });

    console.log('Added new student to database');

    res.status(200).json({ data: student });
  } else if (req.method === 'GET') {
    const students = await prisma.students.findMany();

    console.log('Retrieved all students from database');

    res.status(200).json({ data: students });
  } else if (req.method === 'PUT') {
    const updatedData = req.body;

    const student = await prisma.students.update({
      where: { id: updatedData.id },
      data: {
        firstname: updatedData.firstname,
        lastname: updatedData.lastname,
        year: updatedData.year,
        phone: updatedData.phone,
        email: updatedData.email,
        text: updatedData.text,
      },
    });

    console.log('Edited student in database');

    res.status(200).json({ data: student });
  } else if (req.method === 'DELETE') {
    const id = req.body.id;

    await prisma.students.delete({ where: { id } });

    console.log('Deleted student from database');

    res.status(200).json({ message: 'Deleted successfully' });
  }
}
