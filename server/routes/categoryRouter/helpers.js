const validateHrs = (res, urgentHrsLessThan, mediumHrsLessThan) => {
  if (urgentHrsLessThan && typeof urgentHrsLessThan !== "number") {
    res.status(400).json({
      errorsArr: "Urgent hours should be number",
    });
  }
  if (mediumHrsLessThan && typeof mediumHrsLessThan !== "number") {
    res.status(400).json({
      errorsArr: "Medium hours should be number",
    });
  }
};

module.exports = { validateHrs };
