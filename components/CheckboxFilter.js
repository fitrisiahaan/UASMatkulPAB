// CheckboxFilter.js
import React, { useState } from 'react';
import { VStack, Checkbox, Text } from 'native-base';

const CheckboxFilter = ({ onFilterChange }) => {
  const initialJobTypes = [
    { label: 'Fulltime', value: false },
    { label: 'Internship', value: false },
    { label: 'Part-time', value: false },
    { label: 'Freelance', value: false },
    { label: 'Asisten Praktikum', value: false },
  ];

  const [selectedJobTypes, setSelectedJobTypes] = useState(initialJobTypes);

  const handleCheckboxChange = (index) => {
    const updatedSelection = [...selectedJobTypes];
    updatedSelection[index].value = !updatedSelection[index].value;

    setSelectedJobTypes(updatedSelection);

    // Callback to parent component with updated job types
    onFilterChange(updatedSelection.filter((jobType) => jobType.value).map((jobType) => jobType.label));
  };

  return (
    <VStack space={2} alignItems="flex-start" pl={5}>
      <Text fontSize="md" fontWeight="bold">
        Job Type
      </Text>
      {selectedJobTypes.map((jobType, index) => (
        <Checkbox
          key={index}
          value={jobType.label}
          isChecked={jobType.value}
          onChange={() => handleCheckboxChange(index)}
        >
          {jobType.label}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default CheckboxFilter;
