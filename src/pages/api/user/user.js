const user = [
  {
    name: 'tarif al hasan',
    id: '1',
    job: 'developer',
  },
  {
    name: 'arif al hasan',
    id: '2',
    job: 'developer',
  },
];

export default function Alluser(req, res) {
  res.sendStatus(200).json(user);
}
