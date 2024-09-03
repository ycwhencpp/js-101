const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
});

const handelChange = (fieldname) => {
  return (e) => {
    setFormData({
      ...formData,
      [fieldname]: e.target.value,
    });
  };
};
<>
  <input type="text" value={formData.lastName} onChange={handelChange("lastName")} />
  <input type="text" value={formData.lastName} onChange={handelChange("firstName")} />
  <input type="text" value={formData.lastName} onChange={handelChange("email")} />
</>;
onchange = { fn };
