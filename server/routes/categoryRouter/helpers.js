const validateHrs = (res, urgentHrsLessThan, mediumHrsLessThan) => {
  if (!urgentHrsLessThan || !mediumHrsLessThan) return;

  if (urgentHrsLessThan >= mediumHrsLessThan)
    res.status(400).json({
      errorsArr: ["Urgent hours should be less than medium hours"],
    });
};

module.exports = { validateHrs };
