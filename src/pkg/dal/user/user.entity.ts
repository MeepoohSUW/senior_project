import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AllergicDrugUsedEntity } from '../allergic-drug-used/allergic-drug-used.entity';
import { DrugCurrentlyUsedEntity } from '../drug-currently-used/drug-currently-used.entity';
import { InrEntity } from '../inr/inr.entity';
import { QuestionEntity } from '../question/question.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ name: 'first_name', type: 'varchar', length: 255 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 255 })
  lastName: string;

  @Column({ name: 'id_card_number', type: 'varchar', length: 13 })
  idCardNumber: string;

  @Column({ name: 'birth_date', type: 'timestamptz' })
  birthDate: Date;

  @Column({ name: 'blood_group', type: 'varchar', length: 255 })
  bloodGroup: string;

  @Column({ name: 'medication_condition', type: 'varchar', length: 255 })
  medicationCondition: string;

  @Column({ type: 'numeric' })
  weight: number;

  @Column({ type: 'numeric' })
  height: number;

  @Column({ type: 'numeric' })
  bmi: number;

  @Column({ name: 'phone_num', type: 'varchar', length: 10 })
  phoneNum: string;

  @Column({ name: 'emergency_contact', type: 'varchar', length: 255 })
  emergencyContact: string;

  @Column({ name: 'emergency_phone_num', type: 'varchar', length: 10 })
  emergencyPhoneNum: string;

  @Column({ type: 'varchar', length: 255 })
  pic: string;

  @OneToMany(() => QuestionEntity, (question) => question.user)
  questions: QuestionEntity[];

  @OneToMany(() => InrEntity, (inr) => inr.user)
  inrs: InrEntity[];

  @OneToMany(
    () => AllergicDrugUsedEntity,
    (allergicDrugUsed) => allergicDrugUsed.user,
  )
  allergicDrugUseds: AllergicDrugUsedEntity[];

  @OneToMany(
    () => DrugCurrentlyUsedEntity,
    (drugCurrentlyUsed) => drugCurrentlyUsed.user,
  )
  drugCurrentlyUseds: DrugCurrentlyUsedEntity[];
}